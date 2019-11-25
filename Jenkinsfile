pipeline {
    agent any



stages{

		stage('Install package'){
            
            steps {
                bat 'npm install'              
            }
        }
        
        stage('Build'){
            
            steps {
                bat 'ng build'              
            }
        }

        stage('copy artifact'){
            steps{
                bat 'xcopy .//dist//*WEB* D:/comericagit/HMIPlatformCEBase/Files/'
            }
        }
}
}