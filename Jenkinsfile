pipeline {
    agent any
 
    tools {
        nodejs 'mynode' 
    }
 
    stages {
        stage('git cloning') {
            steps {
                   echo 'github checkout'
                    checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/devendra-sutar/myapp.git']])
                }
            }
        stage('build') {
            steps {
                echo 'building nodejs app'
                sh 'npm install'
            }
        }
        stage('test') {
            steps {
                echo 'testing'
                sh './node_modules/mocha/bin/_mocha --exit ./test/test.js'
            }
        }
        stage('deploy') {
            steps {
                script{ 
                sshagent(['b12d0adc-fcd6-4660-a31d-f1520420952d']) {
                    
                           sh '''
                           ssh -o StrictHostKeyChecking=no ubuntu@34.228.12.72<<EOF
                           cd /home/ubuntu/nodeapp/
                           git pull https://github.com/devendra-sutar/myapp.git
                            npm install
                            sudo npm install -g pm2
                            pm2 restart index.js || pm2 start index.js
                            exit
                            EOF
                           '''
                        }
                }
            }
        }
    }
}
