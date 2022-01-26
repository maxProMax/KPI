// LAB 1
(function () {
    const array = prompt('Enter array(1,2,3,4) ', '').split(',');
    const number = prompt('Enter number', []);
    let count = 0;
    array.forEach(function (item) {
        if (item > number) {
            count += 1;
        }
    });
    alert(`${count} items higher than ${number}`);
})();

// LAB 2
// 1.
var networ = [
    //       a, b, c, d, e, f, g, h
    /* a */ [0, 4, 0, 0, 0, 8, 0, 0],
    /* b */ [0, 0, 5, 0, 0, 2, 0, 0],
    /* c */ [0, 5, 0, 5, 0, 3, 1, 0],
    /* d */ [0, 0, 5, 0, 7, 0, 0, 2],
    /* e */ [0, 0, 0, 7, 0, 0, 0, 4],
    /* f */ [0, 2, 3, 0, 0, 0, 6, 0],
    /* g */ [0, 0, 1, 0, 0, 6, 0, 5],
    /* h */ [0, 0, 0, 0, 0, 0, 0, 0],
];
function bfs(rGraph, s, t, parent) {
    var visited = [];
    var queue = [];
    var V = rGraph.length;
    for (var i = 0; i < V; i++) {
        visited[i] = false;
    }
    queue.push(s);
    visited[s] = true;
    parent[s] = -1;

    while (queue.length != 0) {
        var u = queue.shift();
        for (var v = 0; v < V; v++) {
            if (visited[v] == false && rGraph[u][v] > 0) {
                queue.push(v);
                parent[v] = u;
                visited[v] = true;
            }
        }
    }
    return visited[t] == true;
}

function fordFulkerson(graph, s, t) {
    var rGraph = [];
    for (var u = 0; u < graph.length; u++) {
        var temp = [];
        for (v = 0; v < graph.length; v++) {
            temp.push(graph[u][v]);
        }
        rGraph.push(temp);
    }
    var parent = [];
    var maxFlow = 0;

    while (bfs(rGraph, s, t, parent)) {
        var pathFlow = Number.MAX_VALUE;
        for (var v = t; v != s; v = parent[v]) {
            u = parent[v];
            pathFlow = Math.min(pathFlow, rGraph[u][v]);
        }
        for (v = t; v != s; v = parent[v]) {
            u = parent[v];
            rGraph[u][v] -= pathFlow;
            rGraph[v][u] += pathFlow;
        }

        maxFlow += pathFlow;
    }
    return maxFlow;
}

// 2.

const bfs = (graph, source, target) => {
    const n = graph.length;
    const visited = new Array(n).fill(false);
    const parent = new Array(n).fill(null);

    const queue = [source];
    visited[source] = true;
    parent[source] = null;

    while (queue.length > 0) {
        const node = queue.shift();

        if (node === target) {
            return parent;
        }

        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (!visited[neighbor] && graph[node][neighbor] >= 1) {
                visited[neighbor] = true;
                parent[neighbor] = node;
                queue.push(neighbor);
            }
        }
    }
    return parent;
};

const buildGraph = (seats) => {
    const m = seats.length;
    const n = seats[0].length;

    const source = m * n;
    const target = m * n + 1;

    const directions = [
        [0, -1],
        [-1, -1],
        [1, -1],
        [0, 1],
        [-1, 1],
        [1, 1],
    ];

    const graph = new Array(m * n + 2)
        .fill(0)
        .map((a) => new Array(m * n + 2).fill(0));
    let seatCount = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (seats[i][j] === '#') {
                continue;
            }
            seatCount++;
            const node = i * n + j;

            if (j % 2 === 0) {
                graph[source][node] = 1;

                for (const [p, q] of directions) {
                    const x = i + p;
                    const y = j + q;

                    if (
                        x < 0 ||
                        x >= m ||
                        y < 0 ||
                        y >= n ||
                        seats[x][y] === '#'
                    ) {
                        continue;
                    }
                    const neighbor = x * n + y;

                    graph[node][neighbor] = 1;
                }
            } else {
                graph[node][target] = 1;
            }
        }
    }
    return {
        seatCount,
        graph,
        source,
        target,
    };
};

const edmondsKarpFlow = (graph, source, target) => {
    let flow = 0;
    while (true) {
        const parent = bfs(graph, source, target);
        if (!parent[target]) {
            break;
        }

        let v = target;
        while (v !== source) {
            const u = parent[v];
            graph[u][v]--;
            graph[v][u]++;

            v = u;
        }

        flow++;
    }
    return flow;
};

// LAB 2 end

// LAb 3

var graph = [
    [0, 1, 0, 1, 1, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
];

function korsadja(G) {
    var S = [0];

    function createBranch(G, stask, j = 0, isPush = true) {
        let nextStep = true;

        while (nextStep) {
            for (let i = j; i < G.length; i++) {
                if (G[j][i] && !S.includes(i)) {
                    if (isPush) {
                        stask.push(i);
                    } else {
                        stask.splice(j + 1, 0, i);
                    }

                    j = i;
                    break;
                }

                if (i == G.length - 1) {
                    nextStep = false;
                }
            }

            if (j == G.length - 1) {
                nextStep = false;
            }
        }
    }

    createBranch(G, S);

    for (let l = S.length - 1; l >= 0; l--) {
        createBranch(G, S, S[l], false);
    }

    function revert(G) {
        var reslult = [];

        for (let i = 0; i < G.length; i++) {
            for (let j = 0; j < G.length; j++) {
                reslult[j] = reslult[j] || [];
                reslult[j][i] = G[i][j];
            }
        }

        return reslult;
    }

    function createOpositeBranch(G, stask, j) {
        let nextStep = true;

        while (nextStep) {
            for (let i = j; 0 <= i; i--) {
                if (G[j][i] && !stask.includes(i)) {
                    stask.push(i);

                    j = i;
                    break;
                }

                if (i == 0) {
                    nextStep = false;
                }
            }

            if (j == 0) {
                nextStep = false;
            }
        }
    }

    const G_2 = revert(G);
    const S_final = [];

    for (let l = S.length - 1; l > 0; l--) {
        const temp_S = [S[l]];

        if (S_final.some((item) => item.includes(S[l]))) {
            continue;
        }

        createOpositeBranch(G_2, temp_S, S[l]);

        S_final.push(temp_S);
    }

    return S_final;
}

// LAb 3

function choise(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min_index = i;
        for (let j = i + 1; j < arr.length; j++) {
            min_index = arr[j] < arr[min_index] ? j : min_index;
        }

        const temp = arr[i];

        arr[i] = arr[min_index];
        arr[min_index] = temp;
    }

    return arr;
}

// console.log(choise([6, 5, 4, 3, 1, 3, 4, 5, 6, 7, 8, 9]));

function insertion(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let temp = arr[i];

        while (j >= 0 && temp < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = temp;

        console.log(arr);
    }

    return arr;
}

console.log(insertion([85, 12, 59, 45, 72, 51]));

function countingSort(arr) {
    const tempArr = [];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        tempArr[arr[i]] = tempArr[arr[i]] ? tempArr[arr[i]] + 1 : 1;
    }

    for (let j = 0; j < tempArr.length; j++) {
        if (!window.isNaN(tempArr[j])) {
            for (let k = 0; k < tempArr[j]; k++) {
                result.push(j);
            }
        }
    }

    return result;
}
var a = [2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2];

console.log(countingSort(a));

function quickSort(arr, start = 0, end = arr.length - 1) {
    function swap(list, a, b) {
        [list[a], list[b]] = [list[b], list[a]];
    }

    let pivot = arr[start];
    let pointer = start;

    for (let i = start; i < arr.length; i++) {
        if (arr[i] < pivot) {
            pointer++;
            swap(arr, pointer, i);
        }
    }

    swap(arr, start, pointer);

    const pivotIndex = pointer;

    if (start >= end) {
        return arr;
    }

    quickSort(arr, start, pivotIndex);
    quickSort(arr, pivotIndex + 1, end);

    return arr;
}

var a = [77, 54, 34, 67, 89];

console.log(quickSort(a));

function merge(left, right) {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

function mergeSort(unsortedArray) {
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }

    const middle = Math.floor(unsortedArray.length / 2);
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    insert(item) {
        this.heap.push(item);
        var index = this.heap.length - 1;
        var parent = this.parentIndex(index);
        while (this.heap[parent] && this.heap[parent] < this.heap[index]) {
            this.swap(parent, index);
            index = this.parentIndex(index);
            parent = this.parentIndex(index);
        }
    }
}

function heapSort(arr) {
    var sorted = [];
    var heap = new MaxHeap();

    for (let i = 0; i < arr.length; i++) {
        heap.insert(arr[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        sorted.push(heap.delete());
    }
    return sorted;
}

function heapify(arr, length, i) {
    let largest = i;
    let left = i * 2 + 1;
    let right = left + 1;

    if (left < length && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < length && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        heapify(arr, length, largest);

        return arr;
    }
}

function heapSort(arr) {
    let length = arr.length;

    let i = Math.floor(length / 2 - 1);

    let k = length - 1;

    while (i >= 0) {
        heapify(arr, length, i);
        i--;
    }

    while (k >= 0) {
        [arr[0], arr[k]] = [arr[k], arr[0]];
        heapify(arr, k, 0);
        k--;
    }
    return arr;
}

var a = [2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2];
console.log(heapSort(a));

function countingSortByDigit(array, radix, exponent, minValue) {
    var i;
    var bucketIndex;
    var buckets = new Array(radix);
    var output = new Array(array.length);

    for (i = 0; i < radix; i++) {
        buckets[i] = 0;
    }

    for (i = 0; i < array.length; i++) {
        bucketIndex = Math.floor(((array[i] - minValue) / exponent) % radix);
        buckets[bucketIndex]++;
    }

    for (i = 1; i < radix; i++) {
        buckets[i] += buckets[i - 1];
    }

    for (i = array.length - 1; i >= 0; i--) {
        bucketIndex = Math.floor(((array[i] - minValue) / exponent) % radix);
        output[--buckets[bucketIndex]] = array[i];
    }

    for (i = 0; i < array.length; i++) {
        array[i] = output[i];
    }

    return array;
}

function radixSort(array) {
    if (array.length === 0) {
        return array;
    }

    let radix = 10;

    var minValue = array[0];
    var maxValue = array[0];

    for (var i = 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
        } else if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }

    var exponent = 1;

    while ((maxValue - minValue) / exponent >= 1) {
        array = countingSortByDigit(array, radix, exponent, minValue);

        exponent *= radix;
    }

    return array;
}

var testArray = [331, 454, 230, 34, 343, 45, 59, 453, 345, 231, 9];
radixSort(testArray);
console.log(testArray);
