// ЛАБОРАТОРНF  РОБОТF № 4
// З ДИСЦИПЛІНИ «ОСНОВИ ПРОГРАМУВАННЯ»

// Тема: «Цикли з розгалуженням»

// Викона Студент: Бачинський Максим Володимирович

// Варіант 3

#include <iostream>
#include <math.h>

int main()
{

    float y;

    puts("x  y");

    for (float x = -2; x < 2; x += 0.5)
    {
        if (x <= 0 && x <= 2)
        {
            y = exp(-x) + exp(-2 * x);

            printf("%f  %f \n", x, y);
        }
        else if (x > 2)
        {
            y = exp(1 / (-1 * (x + 5)));
            printf("%f  %f \n", x, y);
        }
        else
        {
            printf("not defined");
        }
    }

    return 0;
}
