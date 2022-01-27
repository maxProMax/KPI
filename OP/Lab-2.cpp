// ЛАБОРАТОРНF  РОБОТF № 2
// З ДИСЦИПЛІНИ «ОСНОВИ ПРОГРАМУВАННЯ»

// Тема: «Розгалужені обчислювальні процеси»

// Викона Студент: Бачинський Максим Володимирович

// Варіант 3

#include <iostream>
#include <math.h>

int main()
{
    int a, b, expression = 0;

    std::cout << "Enter var a:\n";
    std::cin >> a;

    std::cout << "Enter var b:\n";
    std::cin >> b;

    if (a > 0 && b > 0)
    {
        expression = pow(a, 3) / pow(b, 2);
    }
    else if (a > 0 && b < 0)
    {
        expression = a / b;
    }
    else if (b == 0)
    {
        expression = pow(a, 2);
    }

    std::cout << "Result :\n"
              << expression << std::endl;

    return 0;
}
