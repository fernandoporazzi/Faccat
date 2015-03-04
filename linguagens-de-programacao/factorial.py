#!/usr/bin/python
# -*- coding: utf-8 -*-


def fatorial(n):
    if (n < 0):
        return 'Type a negative number! Try again...'

    if (n == 0):
        return 1

    fat = n
    while n > 2:
        fat = fat * (n - 1)
        n = n - 1

    return fat


def fatorial_recursive(n):
    if (n < 0):
        return 'Type a negative number! Try again...'

    elif (n == 0):
        return 1

    else:
        return (n * fatorial_recursive(n - 1))


option = input('Digite 0 para iteração ou 1 para recursivo: ')
n = input('Digite um valor: ')

if (option == 0):
    print(fatorial(n))
if (option == 1):
    print(fatorial_recursive(n))
