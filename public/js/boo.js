var counter_process = 0;
var counter_condition = 0;
var temporary_ordering = [];
var desc_process = [];
var desc_condition = [];

$(' #f_write ').on('click', function() {
    
    var val = $(" input[name='main']:checked ").val();
    var is_process = val == 'process' ? true : false;
    var is_condition = val == 'condition' ? true : false;
    
    if(is_process) counter_process += 1;
    if(is_condition) counter_condition += 1;
    
    if(val) {

        //add flow item on view
        $('#temp_flowchart').append(addItem(val));
        
        //create temporary variable
        if(is_process) val = val+"_"+counter_process;
        if(is_condition) val = val+"_"+counter_condition;
        
        temporary_ordering.push(val);
        
    } else {
        alert('Choose one');
    }
    
});

//flowchart parsing process
$(' #generateNow ').on('click', function() {
    
    var parsingText = parsing_text();
    
    var diagram = flowchart.parse(parsingText).drawSVG('diagram');
    
});

function addItem(val) {

    if(val == 'process') {
        val_counter_process = val + '_' + counter_process;
        item = '<div class="input-group input-group-sm">'+
            '<div class="input-group-btn">'+
                '<button type="button" class="btn btn-primary">'+val+'</button>'+
            '</div>'+
            '<input id="'+val_counter_process+'" type="text" class="form-control" placeholder="Description.." onkeyup="addDesc(\'process\',\''+val_counter_process+'\')">'+
        '</div>';
    } else if(val == 'condition') {
        val_counter_condition = val + '_' + counter_condition;
        item = '<div class="input-group input-group-sm">'+
            '<div class="input-group-btn">'+
                '<button type="button" class="btn btn-warning">'+val +'</button>'+
            '</div>'+
            '<input id="'+val_counter_condition+'" type="text" class="form-control" placeholder="Description.." onkeyup="addDesc(\'condition\', \''+val_counter_condition+'\')">'+
        '</div>';
    } else {
        item = '<a href="#">'+val+'</a>';
    }
    
    return '<li>'+
        '<i class="fa fa-user bg-aqua"></i>'+
        '<div class="timeline-item">'+
            '<span class="time"><i class="fa fa-clock-o"></i> ..text</span>'+
            '<h3 class="timeline-header no-border">'+
                item +
            '</h3>'+
        '</div>'+
    '</li>';
}

function parsing_text () {
    var desc = [];
    var main = [];

    $.each(temporary_ordering, function(k, v){
        
        split = v.split('_');
        val = split['0'];

        if(val == 'start') {
            desc.push('st=>start');
            main.push('st');
        } else if (val == 'process') {
            desc_temp = desc_process[v] ? ': '+desc_process[v] : '';
            desc.push(v+'=>operation'+desc_temp);
            main.push(v);
        } else if (val == 'condition') {

        } else if (val == 'end') {
            desc.push('e=>end');
            main.push('e');
        }
    });
    
    return hardCode();
    return desc.join("\n") + "\n\n" + main.join("->");
}

function addDesc (sub, name) {
    val = $("#"+name).val();
    desc_process[name] = val;
}

function hardCode (desc, main) {
    var desc = [];
    var main = [];
    
    desc.push('st=>start');
    main.push('st');

    desc.push('op1=>operation: anjirrrr');
    main.push('op1');
    
    desc.push('e=>end');
    main.push('e');
    
    return desc.join("\n") + "\n\n" + main.join("->");
}