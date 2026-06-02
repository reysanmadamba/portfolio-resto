function fmt(n) {
    return '₱' + Math.round(n).toLocaleString();
}

function calcLoan() {
    var P = parseFloat(document.getElementById('c-amt').value) || 0;
    var r = parseFloat(document.getElementById('c-rate').value) || 0;
    var n = parseInt(document.getElementById('c-term').value) || 1;

    var totalInt = P * (r / 100) * n;
    var totalRep = P + totalInt;
    var monthly = totalRep / n;

    document.getElementById('c-monthly').textContent = fmt(monthly);
    document.getElementById('c-interest').textContent = fmt(totalInt);
    document.getElementById('c-total').textContent = fmt(totalRep);
    document.getElementById('c-annual').textContent = (r * 12).toFixed(1) + '% p.a.';

    var intPerMo = P * (r / 100);
    var prinPerMo = P / n;
    var bal = P;
    var rows = '';

    for (var i = 1; i <= n; i++) {
        bal -= prinPerMo;
        rows +=
            '<div class="calc-row">' +
            '<div>' + i + '</div>' +
            '<div>' + fmt(monthly) + '</div>' +
            '<div>' + fmt(prinPerMo) + '</div>' +
            '<div>' + fmt(intPerMo) + '</div>' +
            '<div>' + fmt(Math.max(0, bal)) + '</div>' +
            '</div>';
    }

    document.getElementById('c-table').innerHTML = rows;
}

function setPill(el) {
    var m = el.getAttribute('data-m');
    document.getElementById('c-term').value = m;
    document.getElementById('c-term-lbl').textContent = m + ' months';
    document.querySelectorAll('.c-pill').forEach(function (p) {
        p.classList.toggle('active', p.getAttribute('data-m') === m);
    });
    calcLoan();
}

document.getElementById('c-amt').addEventListener('input', calcLoan);
document.getElementById('c-rate').addEventListener('input', calcLoan);
document.getElementById('c-term').addEventListener('input', function () {
    var v = this.value;
    document.getElementById('c-term-lbl').textContent = v + ' months';
    document.querySelectorAll('.c-pill').forEach(function (p) {
        p.classList.toggle('active', p.getAttribute('data-m') === v);
    });
    calcLoan();
});

calcLoan();