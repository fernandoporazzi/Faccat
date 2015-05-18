#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main()
{    
    char fileName[30];
    char cTexto;
    FILE *arquivo;
    
    do{
         printf("Informe o nome do aquivo: ");
         gets(fileName);
    }while(fileName == NULL || fileName == "");
    
    //TESTA SE O ARQUIVO EXISTE
    if ((arquivo = fopen(fileName, "r")) == NULL){
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
