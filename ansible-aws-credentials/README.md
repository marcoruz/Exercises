# Ansible Example


## Inhaltsverzeichnis

- [Voraussetzungen](#voraussetzungen)
- [Konfiguration](#konfiguration)
- [Ausführung](#ausführung)
- [Dateistruktur](#dateistruktur)
- [Hinweise](#hinweise)

## Voraussetzungen

Um dieses Beispiel auszuführen, sind folgende Voraussetzungen erforderlich:

1. [Terraform](https://www.terraform.io/) installiert.
2. [AWS CLI](https://aws.amazon.com/cli/) installiert und konfiguriert.
3. [Ansible](https://www.ansible.com/) installiert.

## Konfiguration

Die Konfiguration erfolgt über Terraform-Variablen in der Datei `terraform.tfvars`. 

```hcl
aws_profile = "default"
region = "eu-central-1"
key_name = "id_rsa"
server_names = ["loadbalancer", "app1", "app2", "app3"]
