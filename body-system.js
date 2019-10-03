var roaa = function () {
    var overtime = prompt('please add number');
    var yoursalary;
    if (overtime > 50) {
        yoursalary = '500';
    } else if (overtime > 25) {
         yoursalary = '400';
     } else if (overtime < 20) {
        yoursalary = '250';
    }else{
        yoursalary = overtime
    }
    return roaa(yoursalary);
}