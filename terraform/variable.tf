variable "project_id" {
  description = "The ID of the Google Cloud Platform project"
  default     = "your-default-project-id"
}

variable "region" {
  description = "The region to deploy the frontend VM instance"
  default     = "us-central1"
}

variable "zone" {
  description = "The zone to deploy the frontend VM instance"
  default     = "us-central1-a"
}

variable "instance_name" {
  description = "The name of the frontend VM instance"
  default     = "app-instance"
}

variable "machine_type" {
  description = "The machine type of the frontend VM instance"
  default     = "n1-standard-1"
}

variable "image" {
  description = "The image for the frontend VM instance"
  default     = "debian-cloud/debian-11"
}

variable "bucket_name" {
  description = "The Bucket name to store the terraform state file"
  default = "my-bucket"
}