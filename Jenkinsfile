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
                sh 'ifconfig'
            }
        }
        stage('Test') {
                    steps {
                        sh "chmod +x /var/lib/jenkins/workspace/reactjs/jenkins/scripts/test.sh"
                        sh './jenkins/scripts/test.sh'
                    }
                }
                stage('Deliver') {
                            steps {
                               // sh "chmod +x -R ${env.WORKSPACE}"
                                sh 'chmod +x /var/lib/jenkins/workspace/reactjs/jenkins/scripts/deliver.sh'
                                sh 'chmod +x /var/lib/jenkins/workspace/reactjs/jenkins/scripts/kill.sh'
                                sh './jenkins/scripts/deliver.sh'
                                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                                sh './jenkins/scripts/kill.sh'
                            }
                        }


    }
}
