var upb=document.getElementsByClassName('update-cart')

for(var i=0;i<upb.length;i++){
    upb[i].addEventListener('click',function(){
        var pId=this.dataset.productname
        var act=this.dataset.action
        console.log('action:',act,'product:',pId)
        console.log('USER:',user)
        if(user=='AnonymousUser'){
            console.log('not loged in')
        }
        else
            updateUserOrder(pId,act)
    })
}

function updateUserOrder(pId,act){

    var url='update_item/'

    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken':csrftoken
        },
        body:JSON.stringify({'productId':pId,'action':act})
    })

    .then((response)=>{
        return response.json()
    })
     .then((data)=>{
        console.log('data:',data)
        location.reload()
    })
}