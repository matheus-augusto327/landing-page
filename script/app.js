let url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome';

$.getJSON(url, function(data){
    
    let content = '<optiongroup>';
    $.each(data, function(v, val){
        
        if(val.nome=='São Paulo'){
            content += '<option selected>'+val.nome+'</option>';
        }
        else{
            content += '<option>'+val.nome+'</option>'
        }
    });
    content += '</optiongroup>';

    $("#states").html(content);
});