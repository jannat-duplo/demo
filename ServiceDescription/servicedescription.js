{
    "DisableAutoProvision": false,
    "Roles": [
        {
            "Tags": [],
            "Name": "classiclb",
            "DockerImage": "nginx:<hubtag>",
            "Replicas": 1,
            "NetworkId": "default",
            "AgentPlatform": 0,
            "Volumes": "",
            "ExtraConfig": "",
            "AllocationTags": "",
            "ApplicationUrl": "",
            "IsInfraDeployment": false,
            "SecondaryTenant": "",
            "LBConfigurations": [
                {
                    "ReplicationControllerName": "classiclb",
                    "Protocol": "http",
                    "Port": "80",
                    "DIPAddresses": [],
                    "HostPort": 0,
                    "IsInfraDeployment": false,
                    "SetIngressHealthCheck": false,
                    "ExternalPort": 30003,
                    "IsInternal": false,
                    "ForHealthCheck": false,
                    "HealthCheckUrl": "/",
                    "IsNative": false,
                    "LbType": 0,
                    "TgCount": 0,
                    "ExtraSelectorLabels": [],
                    "HealthCheckConfig": {
                        "HealthyThresholdCount": 0,
                        "UnhealthyThresholdCount": 0,
                        "HealthCheckTimeoutSeconds": 0,
                        "HealthCheckIntervalSeconds": 0
                    },
                    "LbIndex": 0,
                    "TenantId": ""
                }
            ],
            "OtherDockerConfig": "",
            "OtherDockerHostConfig": "",
            "DeviceIds": [],
            "Cloud": 0,
            "IsLBSyncedDeployment": true,
            "ForceStatefulSet": false,
            "IsDaemonset": false,
            "IsReplicaCollocationAllowed": false,
            "IsAnyHostAllowed": false,
            "IsCloudCredsFromK8sServiceAccount": false,
            "TenantId": ""
        }
    ]
    "NativeHosts": [],
    "NativeHostCustomData": [],
    "CustomData": [],
    "S3Buckets": [],
    "SgRules": []
}