export function getCategoryName(categoryId:number) { 
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
