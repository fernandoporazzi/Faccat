#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main()
{    
    char nome[30];
    char dir[10] = "D:\\";
    char cTexto;
    FILE *arquivo;
    
    do{
         printf("Informe o nome do aquivo: ");
         gets(nome);
         strcat(nome, ".txt");
         strcat(dir, nome);
    }while(nome == NULL || nome == "");
    
    //TESTA SE O ARQUIVO EXISTE
    if ((arquivo = fopen(dir, "r")) == NULL){
       printf("Fudeu, o arquivo nao existe!! \n\n");
    }else{
          //ENQUANTO NÃO CHEGAR AO FINAL DO ARQUIVO
          while((cTexto = getc(arquivo) ) != EOF)
          //IMPRIME O CARACTER LIDO
          printf("%c", cTexto);
          printf("\n\n");
    }
    fclose(arquivo);
    system ("pause");
}
