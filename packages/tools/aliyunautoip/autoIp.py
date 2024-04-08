# -*- coding: utf-8 -*-
# This file is auto-generated, don't edit it. Thanks.



source_group_id = "sg-bp1b3td0nomu8dy3cr96"
access_key_id =""
access_key_secret =""
description = "xxx专用"
from alibabacloud_ecs20140526.client import Client as Ecs20140526Client
from alibabacloud_tea_openapi import models as open_api_models
from alibabacloud_ecs20140526 import models as ecs_20140526_models
import logging,requests,os
fmt = '%(asctime)s %(filename)s[line: %(lineno)d] %(levelname)s: %(message)s'

logging.basicConfig(level=logging.INFO,
                    format=fmt,
                    filename='logs.log',
                    filemode='a',
                    datefmt='%a, %d %b %Y %H:%M:%S'
                    )
logger = logging.getLogger()



class Sample:
    def __init__(self):
        logger.info("开始:")
        self.region_id = "cn-hangzhou"
        self.source_group_id = source_group_id
        self.access_key_id= access_key_id
        self.access_key_secret=access_key_secret
        self.nic_type = 'internet'
        self.priority = '1'
        self.source_port_range = '-1/-1'
        self.ip_protocol = 'all'
        self.description = description
        self.client = Sample.create_client(self.access_key_id, self.access_key_secret)
        self.myip = self.getip()
    @staticmethod
    def create_client(
        access_key_id: str,
        access_key_secret: str,
    ) -> Ecs20140526Client:
        """
        使用AK&SK初始化账号Client
        @param access_key_id:
        @param access_key_secret:
        @return: Client
        @throws Exception
        """
        config = open_api_models.Config(
            # 您的AccessKey ID,
            access_key_id=access_key_id,
            # 您的AccessKey Secret,
            access_key_secret=access_key_secret
        )
        # 访问的域名
        config.endpoint = 'ecs-cn-hangzhou.aliyuncs.com'
        return Ecs20140526Client(config)


    def add(self,ip):
        #添加安全组
        authorize_security_group_request = ecs_20140526_models.AuthorizeSecurityGroupRequest(
            ip_protocol=self.ip_protocol,
            region_id=self.region_id,
            port_range=self.source_port_range,
            source_group_id=self.source_group_id,
            security_group_id=self.source_group_id,
            nic_type=self.nic_type,
            priority=self.priority,
            source_port_range=self.source_port_range,
            description=self.description,
            source_cidr_ip=ip
        )
        self.client.authorize_security_group(authorize_security_group_request)

    def main(self):
        describe_security_group_attribute_request = ecs_20140526_models.DescribeSecurityGroupAttributeRequest(
            nic_type=self.nic_type,
            region_id=self.region_id,
            # direction='ingress',
            security_group_id=self.source_group_id
        )
        # 复制代码运行请自行打印 API 的返回值
        a = self.client.describe_security_group_attribute(describe_security_group_attribute_request)
        detail = a.body
        flag = 1
        for permission in detail.permissions.permission:

            if permission.description == self.description:
                flag = 0
                if  self.myip == permission.source_cidr_ip:
                    logger.info("在线查询IP未改变:{}".format(self.myip))
                    break
                else:
                    #删除原来的IP，新增现在的IP
                    flag = 1
                    self.delete(permission.source_cidr_ip)

                    #先新增
        if flag == 1:
            logger.info("添加IP成功:{}".format(self.myip))
            self.add(self.myip)

    def delete(self,ip):
        #移除安全组，根据IP
        revoke_security_group_request = ecs_20140526_models.RevokeSecurityGroupRequest(
            region_id=self.region_id,
            security_group_id=self.source_group_id,
            port_range=self.source_port_range,
            ip_protocol=self.ip_protocol,
            source_cidr_ip=ip
        )
        # 复制代码运行请自行打印 API 的返回值
        info =  self.client.revoke_security_group(revoke_security_group_request)
    def getip(self):
        r = requests.get('https://sxo2qr.laf.run/tools/get_local_ip')
        logger.info("获取Ip：{}".format(r.text))
        return r.text


if __name__ == '__main__':
    a = Sample()
    a.main()
