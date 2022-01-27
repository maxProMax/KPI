// ЛАБОРАТОРНF  РОБОТF № 1
// З ДИСЦИПЛІНИ «ОСНОВИ ПРОГРАМУВАННЯ»

// Тема: «Типи даних. Функції введення - виведення. Обчислення виразів»

// Викона Студент: Бачинський Максим Володимирович

// Варіант 3

// X = (-2.25(A + B * C)) / (B - D(1/2))

#include <iostream>
#include <math.h>

int main()
{
    float A, B, C, D;

    std::cout << "Enter var A:\n";
    std::cin >> A;

    std::cout << "Enter var B:\n";
    std::cin >> B;

    std::cout << "Enter var C:\n";
    std::cin >> C;

    std::cout << "Enter var D:\n";
    std::cin >> D;

    float sum = (-2.25 * (A + B * C)) / (B - pow(D, 0.5));

    std::cout << "Sum is - \n"
              << sum;

    return 0;
}

// Вивчив особливості використання  вбудованих типів даних: char,  int,  long, short, float, double, unsigned char, unsigned int, unsigned long.
// Вивчив особливості використання функцій введення - виведення.
// Навчився застосовувати стандартні математичні функції.