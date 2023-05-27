const cdk = require('@aws-cdk/core');
const s3 = require('@aws-cdk/aws-s3');
const s3deploy = require('@aws-cdk/aws-s3-deployment');

const app = new cdk.App();
const stack = new cdk.Stack(app, "MyStaticSiteStack");

const websiteBucket = new s3.Bucket(stack, 'WebsiteBucket');

new s3deploy.BucketDeployment(stack, 'DeployWebsite', {
    sources: [s3deploy.Source.asset('../path/to/your/website/files')],
    destinationBucket: websiteBucket
});

app.synth();

// const { Stack, Duration } = require('aws-cdk-lib');
// // const sqs = require('aws-cdk-lib/aws-sqs');

// class AwsWorkshop2Stack extends Stack {
//   /**
//    *
//    * @param {Construct} scope
//    * @param {string} id
//    * @param {StackProps=} props
//    */
//   constructor(scope, id, props) {
//     super(scope, id, props);

//     // The code that defines your stack goes here

//     // example resource
//     // const queue = new sqs.Queue(this, 'AwsWorkshop2Queue', {
//     //   visibilityTimeout: Duration.seconds(300)
//     // });
//   }
// }

// module.exports = { AwsWorkshop2Stack }
