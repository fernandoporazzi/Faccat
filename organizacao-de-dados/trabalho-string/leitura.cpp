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
       printf("Fudeu, o arquivo nao existe!! \n\n");
    }else{
          fgets (sTexto, sizeof(sTexto), arquivo);
          //IMPRIME O CARACTER LIDO
          printf("\n %s \n",sTexto);
          printf("\n\n");
    }
    fclose(arquivo);
    system ("pause");
}
