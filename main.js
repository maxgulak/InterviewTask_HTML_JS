var array = [6, 2, 3, 1, 7, 4, 8, 5]

Quicksort(array, 0,array.length - 1);
DrawArray();

function  Quicksort(array, l, r) {
    if (l < r)
    {
        let c = Partition(array, l, r);
        Quicksort(array, l, c);
        Quicksort(array, c + 1, r);
    }
}

function  Partition(array, l, r) {
    let c = array[Math.floor((l + r) / 2)];
    let i = l;
    let j = r;
    while (i <= j)
    {
        while (array[i] < c)
            i++;
        while (array[j] > c)
            j--;
        if (i >= j)
            break;
        Swap(i, j)
    }
    return j;
}

function Swap(a, b) {
    let tmp = array[b];
    array[b] = array[a];
    array[a] = tmp;
}

function DrawArray() {
    var wrapper = $(".blocks-wrapper");
    wrapper.html('');
    array.forEach(element => {
        wrapper.append(`<div class="block" id="block-${element}">${element}</div>`);
    });
    wrapper.addClass('reDrawed');

    setTimeout(() => {
        wrapper.removeClass('reDrawed');
    },1000)
}