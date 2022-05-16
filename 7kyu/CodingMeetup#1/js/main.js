function countDevelopers(list) {
    let jsEuroArr = list.filter(
    dev => dev.continent == 'Europe' && dev.language == 'JavaScript'
    );
    return jsEuroArr.length
    }