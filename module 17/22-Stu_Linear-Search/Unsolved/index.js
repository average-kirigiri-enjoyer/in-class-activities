const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];

// TODO: Complete the linearSearch function below.
const linearSearch = (array, element) =>
{
    let index;

    for (arrElement = 0; arrElement < array.length; arrElement++)
    {
        if (array[arrElement] === element)
        {
            index = arrElement;
            return index;
        }
    }

    if (!index)
    {
        index = -1;
    }

    return index;
};

module.exports = linearSearch;