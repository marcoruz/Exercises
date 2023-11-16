import boto3
import datetime
import os
os.environ['AWS_PROFILE'] = '598990243446_Student'




 #Konfiguration 
cloudwatch = boto3.client('cloudwatch', region_name='eu-central-1')

timestamp = datetime.datetime.now()
namespace = 'MetricEC2_Ue130'

response = cloudwatch.put_metric_data( 
       MetricData=[
        {
            'MetricName': 'EC2_Ue130_Metric_Test',
            'Dimensions': [
                {
                    'Name': 'i-0b4ec21c1a8b75ed9',
                    'Value': 'MetricInstance',
                },
            ],
            'Timestamp': timestamp,
            'Value': 70,
            'Unit': 'Percent',  # Einheiten wie 'Count', 'Percent', 'Bytes', 'Seconds', etc.
        },
    ],
    Namespace='MetricEC2_Ue130'                                          
                                                
                                                
  )
print(response)

