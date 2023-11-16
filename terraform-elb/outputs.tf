output "loadbalancer_url" {
  value = aws_lb.application_loadbalancer.dns_name
}




#output "instance_id" {
 #   value = aws_instance.ec2s.*.id
  
#}