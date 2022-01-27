// ЛАБОРАТОРНF  РОБОТF № 3
// З ДИСЦИПЛІНИ «ОСНОВИ ПРОГРАМУВАННЯ»

// Тема: «Циклічні обчислювальні процеси»

// Викона Студент: Бачинський Максим Володимирович

// Варіант 3

#include <iostream>
#include <math.h>

int factorial(int num)
{
    int sum = 1;
    for (int i = 1; i <= num; i++)
    {
        sum *= i;
    }

    return sum;
}

void getSum(int topLimit)
{
    float sum, x, k;
    double N, D;

    for (x = 1; x < 5; x++)
    {
        for (k = 0; k < topLimit; k++)
        {
            N = pow(-1, k + 1) * pow(x, 2 * k - 1);
            D = (2 * k - 1) * factorial(k);

            sum += N / D;

            std::cout << "x - " << x << ";k - " << k << ";sum - " << sum << std::endl;
        }
    }
}

int main()
{
    int k, sum;

    std::cout << "Enter K:\n";
    std::cin >> k;

    getSum(k);

    return 0;
}
