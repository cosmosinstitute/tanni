const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function submitform(){
    const formdata=new FormData(document.getElementById('profiledata'))
    const name=formdata.get('name')
    document.getElementById('hola').textContent='HELLO '+name
    document.getElementById('profiledata').style.display='none'
    for(const pair of formdata.entries()){
        console.log(pair[0]+':'+pair[1])
    }

}
