# Schleife zur Erstellung von Subnetzen und EC2-Instanzen in verschiedenen AZs
resource "aws_subnet" "subnet" {
  count             = length(var.public_subnets_cidr)
  vpc_id            = aws_vpc.main.id
  cidr_block        = var.public_subnets_cidr[count.index]
  availability_zone = var.availability_zones[count.index]
  map_public_ip_on_launch = true
  
  tags = {
    Name = "TF Subnet ${var.availability_zones[count.index]}"
  }
}