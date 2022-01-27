// ЛАБОРАТОРНF  РОБОТF № 7
// З ДИСЦИПЛІНИ «ОСНОВИ ПРОГРАМУВАННЯ»

// Тема: Одновимірні масиви

// Викона Студент: Бачинський Максим Володимирович

// Варіант 3

#include <iostream>
#include <math.h>

int main()
{

    int l, maxVal;

    std::cout << "Enter array l\n";
    std::cin >> l;

    int A[l];
    int B[l];

    for (int i = 0; i < l; i++)
    {
        A[i] = rand() % 100;
    }

    maxVal = A[0];

    for (int i = 0; i < l; i++)
    {
        if (maxVal < A[i])
        {
            maxVal = A[i];
        }
    }

    for (int i = 0; i < l; i++)
    {
        B[i] = maxVal - A[i];
    }

    std::cout << "\nMax Val in A\n"
              << maxVal << std::endl;
    std::cout << "\nArray A:\n";

    for (int i = 0; i < l; i++)
        std::cout << A[i] << ",";

    std::cout << "\n\nArray B:\n";

    for (int i = 0; i < l; i++)
        std::cout << B[i] << ",";

    return 0;
}
