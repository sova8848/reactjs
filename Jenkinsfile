pipeline {

    
    agent any
    
    tools {nodejs "NodeJS"}
     environment {
            CI = 'true'
        }
    stages {

        stage('Build') {
            steps {
                sh 'npm install'
                sh 'pwd'
            }
        }
        stage('Test') {
                    steps {
                        sh "chmod +x /home/jenkins/jobs/react-poc/workspace/jenkins/scripts/test.sh"
                        sh './jenkins/scripts/test.sh'
                    }
                }
                stage('Deliver') {
                            steps {
                               
                                sh 'chmod +x /home/jenkins/jobs/react-poc/workspace/jenkins/scripts/deliver.sh'
                                sh 'chmod +x /home/jenkins/jobs/react-poc/workspace/jenkins/scripts/kill.sh'
                                sh './jenkins/scripts/deliver.sh'
                                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                                sh './jenkins/scripts/kill.sh'
                            }
                        }
    }
}
