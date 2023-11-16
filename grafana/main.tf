resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name = "TF VPC"
  }
}


resource "aws_internet_gateway" "gw" {
  vpc_id = aws_vpc.main.id
  tags = {
    Name = "TF Internet Gateway"
  }
}

resource "aws_route_table" "rt" {
  vpc_id = aws_vpc.main.id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.gw.id
  }
  tags = {
    Name = "TF Route Table"
  }
}

resource "aws_security_group" "allow_ssh_grafana" {
  name = "allow_ssh_grafana"
  description = "Allow SSH inbound traffic"
  vpc_id = aws_vpc.main.id
  ingress {
    description = "SSH from VPC"
    from_port = 22
    to_port = 22
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]

  }

    ingress {
    description      = "Grafana"
    from_port        = 3333
    to_port          = 3333
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  egress {
    description = "Allow all outbound traffic"
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
 tags = {
    Name = "allow_ssh_grafana"
  }

}

