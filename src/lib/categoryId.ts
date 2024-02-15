export function getCategoryId(categoryName:string) { 
    switch (categoryName) {
        case 'Cemilan':
            return 1;
        case 'Minuman':
            return 2;
        case 'Permen':
            return 3;
        default:
            return 0;
    }
}