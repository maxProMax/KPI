// ЛАБОРАТОРНF  РОБОТF № 5
// З ДИСЦИПЛІНИ «ОСНОВИ ПРОГРАМУВАННЯ»

// Тема: «Рекурсивні функції»

// Викона Студент: Бачинський Максим Володимирович

// Варіант 3

#include <iostream>
#include <math.h>

double factorial(int num)
{
    if (num <= 0)
    {
        return 1;
    }

    return num * factorial(num - 1);
}

double getСoefficient(int k, int n)
{
    return factorial(n) / (factorial(k) * factorial(n - k));
}

double count(int n, int k)
{
    if (k == n || k == 0)
    {
        return 1;
    }

    return getСoefficient(k - 1, n - 1) + getСoefficient(n - 1, k);
}

int main()
{

    double n, k;

    std::cout << "Enter n\n";
    std::cin >> n;
    std::cout << "Enter k\n";
    std::cin >> k;

    std::cout << "Result  - " << count(n, k) << std::endl;

    return 0;
}
