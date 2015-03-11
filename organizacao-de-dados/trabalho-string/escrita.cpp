#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main()
{    
    char nome[30];
    char dir[10] = "D:\\";
    char sTexto[99];
    FILE *arquivo;
    
    do{
         printf("Informe o nome do aquivo: ");
         gets(nome);
         strcat(nome, ".txt");
         strcat(dir, nome);
    }while(nome == NULL || nome == "");
    
    //TESTA SE O ARQUIVO EXISTE
    if ((arquivo = fopen(dir, "r")) == NULL){
       //CRIA ARQUIVO
       arquivo = fopen(dir, "w");
       //MOSTRA NOME DO ARQUIVO
       printf("\n Arquivo %s criado! ",&nome);
       //MOSTRA CAMINHO DO ARQUIVO
       printf("\n caminho: %s", dir);
       //TEXTO PARA O ARQUIVO
       printf("\n Digite o texto ou ~(para sair): ");  
       bool continuar = true;
       while(continuar){
            fgets(sTexto,sizeof(sTexto),stdin);                 
            if (sTexto[0] == 126){
               continuar = false;
            }
            else{
                  fputs(sTexto, arquivo);
            }
       }
  }else{
          printf("o arquivo ja existe \n\n");
          }
    fclose(arquivo);
    system ("pause");
}
