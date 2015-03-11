#include<stdio.h>
#include<stdlib.h>

int main(){
    
    struct pessoa{
           int iCodigo;
           char sNome[30];
           int iIdade;
           char sDiagnostico[200];
           char sTratamento[200];
           char cValido;
    }paciente;
    
    FILE *arquivo;
    int iOpcao,iTamanho, iCont;
    char cOpcao;
    
    do{
        do{
            system("clear");
            printf("==================== MENU ==================== \n");
            printf("\n 1. Cadastrar");
            printf("\n 2. Consulta");
            printf("\n 3. Excluir");
            printf("\n 4. Media de idade");
            printf("\n 5. Criar um novo arquivo (sobrescreve se ja existe)");
            printf("\n 6. Sair do programa");
            printf("\n\n Opcao desejada: ");
            scanf("%d",&iOpcao);
        }while((iOpcao < 1) || (iOpcao > 6));
    
    
        switch(iOpcao){
                       case 1:{
                            do{
                                system("clear");
                                printf("==================== CADASTRO DE PACIENTE ==================== \n");
                                
                                if ((arquivo = fopen("arquivoDAT.dat","r+")) == NULL){
                                   arquivo = fopen("arquivoDAT.dat","w+");
                                   
                                }else{
                                      arquivo = fopen("arquivoDAT.dat","r+");
                                }
                                fseek(arquivo,0,SEEK_END);
                                iTamanho = ((ftell(arquivo))/(sizeof(struct pessoa)));
                                paciente.iCodigo = iTamanho ++;
                                     
                                printf("\n Codigo do(a) paciente: %d \n",paciente.iCodigo);
                                getchar();
                                       
                                printf("\n Nome do paciente: ");
                                fgets(paciente.sNome,sizeof(paciente.sNome),stdin);
                                       
                                do{
                                    printf("\n Idade do paciente:");
                                    scanf("%d",&paciente.iIdade);
                                    getchar();
                                                          
                                    if((paciente.iIdade < 1)||(paciente.iIdade > 120)){
                                                        printf("\n\n Idade do paciente invalida! Por favor informe novamente. \n\n");               
                                    }
                                                          
                                }while((paciente.iIdade < 1)||(paciente.iIdade > 120));
                                       
                                printf("\n Diagnostico do paciente: ");
                                fgets(paciente.sDiagnostico,sizeof(paciente.sDiagnostico),stdin);
                                       
                                printf("\n Tratamento do(a) paciente: ");
                                fgets(paciente.sTratamento,sizeof(paciente.sTratamento),stdin);
                                                          
                                paciente.cValido = 's';
                                                          
                                fwrite(&paciente,sizeof(struct pessoa),1,arquivo);
                                       
                                fclose(arquivo);

                                printf("\n\n Deseja fazer outro cadastro - [S]im [N]ao: ");
                                scanf("%c",&cOpcao);
                                getchar();
                            }while((cOpcao == 's') || (cOpcao == 'S'));
                       }break; // fecha case 1 (menu)
                       
                       case 2:{
                            do{
                                system("clear");
                                printf("==================== CONSULTA DE PACIENTE ==================== \n");
                                if ((arquivo = fopen("arquivoDAT.dat","r")) == NULL){
                                   printf("\n Nenhum paciente cadastrado!");
                                }else{
                                      printf("\n 1. Listar todos os pacientes");
                                      printf("\n 2. Consultar paciente pelo codigo");
                                      do{
                                         printf("\n\n Opcao desejada: ");
                                         scanf("%d",&iOpcao);
                                         getchar();
                                         
                                         if ((iOpcao != 1) && (iOpcao != 2)){
                                            system("clear");
                                            printf("\n Opcao incorreta! Por favor informe novamente.");
                                         }
                                      }while((iOpcao < 1) && (iOpcao > 2));
                                      switch(iOpcao){
                                                     case 1:{
                                                        if((arquivo = fopen("arquivoDAT.dat","r")) != NULL){
                                                          fseek(arquivo,0,SEEK_END);
                                                      iTamanho = ((ftell(arquivo))/(sizeof(paciente)));
                                                            
                                                             for(iCont=0;iCont < iTamanho;iCont++){
                                                                 fseek(arquivo,(iCont*sizeof(paciente)),SEEK_SET); // posiona no começo de cada registro
                                                                 fread(&paciente,sizeof(paciente),1,arquivo); // le o registro
                                                                 
                                                                 if (paciente.cValido == 's'){ // se ele ser valido (s), escreve
                                                                    printf("\n --------------------");
                                                                    printf("\n Codigo: %d",paciente.iCodigo);
                                                                    printf("\n Nome: %s",paciente.sNome);
                                                                    printf("\n Idade: %d",paciente.iIdade);
                                                                    printf("\n Diagnostico: %s",paciente.sDiagnostico);
                                                                    printf("\n Tratamento: %s",paciente.sTratamento);
                                                                 }
                                                             }
                                                             printf("\n --------------------");
                                                             
                                                             printf("\n\n Deseja fazer outra consulta - [S]im [N]ao ",cOpcao);
                                                             scanf("%c",&cOpcao);
                                                             getchar();
                                                        }else{
                                                      printf("\n Nenhum paciente cadastrado!");
                                                        }
                                                     }break; // fecha case 1 de consulta
                                                     
                                                     case 2:{
                                                          int iCodigoInformado;
                                                          printf("\n -------------------- \n");
                                                          
                                                          printf("\n Informe o codigo do paciente: ");
                                                          scanf("%d",&iCodigoInformado);
                                                          getchar();
                                                          
                                                          printf("\n --------------------");
                                                          
                                                          fseek(arquivo,(iCodigoInformado*sizeof(paciente)),SEEK_SET); //posiciona na posicao do CodigoInformado
                                                          fread(&paciente,sizeof(paciente),1,arquivo); //le o registro
                                                         
                                                          if (paciente.iCodigo == iCodigoInformado){
                                                      if(paciente.cValido == 's'){
                                                    printf("\n Codigo: %d",paciente.iCodigo);
                                                        printf("\n Nome: %s",paciente.sNome);
                                                          printf("\n Idade: %d",paciente.iIdade);
                                                    printf("\n Diagnostico: %s",paciente.sDiagnostico);
                                                          printf("\n Tratamento: %s",paciente.sTratamento);
                  }else{
                printf("\n Paciente inexistente!");
                  }
                                                          }else{
                                                            printf("\n Codigo de paciente inexistente!");
                                                          }
                                                          
                                                          printf("\n --------------------");
                                                         
                                                          printf("\n\n Deseja fazer outra consulta - [S]im [N]ao: ");
                                                          scanf("%c",&cOpcao);
                                                          getchar();
                                                     }break; // fecha case 2 de consulta
                                      }; // fecha switch de consulta
            fclose(arquivo);
                                }
                            }while((cOpcao == 's') || (cOpcao == 'S')); // final de consulta
                       }break; // fecha case 2 de menu
                       case 3:{
                          do{
                              system("clear");
                              printf("==================== EXCLUIR PACIENTE ==================== \n");
                              if ((arquivo = fopen("arquivoDAT.dat","rb+")) == NULL){
                      printf("\n Nenhum paciente cadastrado!");
                        }else{
                      int iCodigoInformado;
                      printf("\n -------------------- \n");
                        
                                  printf("\n Informe o codigo do paciente a ser excluido: ");
                            scanf("%d",&iCodigoInformado);
                            getchar();
                                  
                                  printf("\n --------------------");
                            
                                  fseek(arquivo,(iCodigoInformado*sizeof(paciente)),SEEK_SET);
                        fread(&paciente,sizeof(paciente),1,arquivo);
                                  
                        if (paciente.iCodigo == iCodigoInformado){
                    if(paciente.cValido == 's'){
              printf("\n Nome: %s",paciente.sNome);
              printf("\n Idade: %d:",paciente.iIdade);
              printf("\n Dianostico: %s",paciente.sDiagnostico);
              printf("\n Tratamento: %s",paciente.sTratamento);
              
              char cAgora;
              printf("\n\n Deseja excluir este paciente - [S]im [N]ao: ");
              scanf("%c",&cAgora);
              getchar();
              
              if ((cAgora == 's') || (cAgora == 'S')){
            paciente.cValido = 'n';
              
                  fseek(arquivo,(iCodigoInformado*sizeof(paciente)),SEEK_SET);
                  
                  if (paciente.cValido == 's'){
                    printf("\n Erro na exclusao!");
            }else{
                printf("\n --------------------");
                printf("\n Paciente excluido com sucesso");
            }
              }
          }else{
                        printf("\n O paciente ja esta excluido!");
                      }
                        }else{
                      printf("\n Codigo de paciente inexistente!");
                        }
                        }
                              fwrite(&paciente,sizeof(struct pessoa),1,arquivo);
                              fclose(arquivo);
                              
                              printf("\n --------------------");
                              
                              printf("\n\n Deseja fazer outra exclusao - [S]im [N]ao: ");
                              scanf("%c",&cOpcao);
                              getchar();
                          }while((cOpcao == 's') || (cOpcao == 'S'));
                       }break; // fecha case 3 de menu
                       case 4:{
                        do{
                          system("clear");
                          printf("==================== IDADE DOS PACIENTES ==================== \n");
                          int iSomaIdade = 0;
                          int iResultadoIdade = 0;
                          int iContExcluidos = 0;
                          
          if ((arquivo = fopen("arquivoDAT.dat","r")) == NULL){
        printf("\n Nenhum paciente cadastrado!");
          }else{
              fseek(arquivo,0,SEEK_END);
              iTamanho = ((ftell(arquivo))/(sizeof(paciente)));
                
              for(iCont=0;iCont<iTamanho;iCont++){
                  fseek(arquivo,iCont*sizeof(paciente),SEEK_SET);
                  fread(&paciente,sizeof(paciente),1,arquivo);
              
                  if(paciente.cValido == 's'){
                iSomaIdade = iSomaIdade + paciente.iIdade;
                  }else{
                iContExcluidos = iContExcluidos ++;
                  }
              }
                }
                iResultadoIdade = ((iSomaIdade)/(iTamanho - iContExcluidos));
                printf("\n --------------------");
                
                printf("\n Media de idade: %d \n",iResultadoIdade);
                
                fclose(arquivo);
                
                printf("--------------------");
                
                printf("\n\n Deseja consultar a media de idade novamente - [S]im [N]ao: ");
                scanf("%c",&cOpcao);
                getchar();
            }while((cOpcao == 's') || (cOpcao == 'S'));
                       }break; // fecha case 4 de menu
                       case 5:{
                          arquivo = fopen("arquivoDAT.dat","w");
                       }break; // fecha case 5 de menu
        }; // fecha switch de menu
    }while(iOpcao != 6); // final de menu
    system("clear");
}
