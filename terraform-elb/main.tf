#locals {
 # az = ["${var.region}a", "${var.region}b", "${var.region}c"]  # Liste der Availability Zones
 # cidrs_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]     # Liste der CIDR-Bereiche für die Subnetze
#}

resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name = "TF VPC"
  }
}








