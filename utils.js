function removePlaceholder() {
    var placeholder = document.getElementById('placeholder');
    placeholder.style.display = 'none';

    var chart = document.getElementById('wardHistoryChart');
    chart.style.display = 'block';
}

// returns english name of ward, assuming input name is in Japanese
function toEnglish(name_ja) {
    for (const ward of tokyo['features']) {
        if (ward['properties']['ward_ja'] === name_ja) {
            return ward['properties']['ward_en'];
        }
    }
    return 'unknown ward';
}