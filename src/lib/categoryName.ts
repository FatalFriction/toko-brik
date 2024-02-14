export function getCategoryName(categoryId:number) {
    //logic to map categoryId to categoryName
    switch (categoryId) {
        case 1:
            return 'Cemilan';
        case 2:
            return 'Minuman';
        case 3:
            return 'Permen';
        default:
            return '';
    }
}