jQuery(document).ready(function ($) {
    var roles = [{tech:'Wordpress',color:'#21759B'}, 
{tech:'Drupal',color:'#0678BE'}, 
{tech:'Laravel',color:'#F46762'},
{tech:'Angular', color:'#C3002F'}];
    //used to determine which is the next roles to be displayed
    var counter =  0;
    var i = 0;
    var role = $('#role')
    //repeat the passed function at the specified interval - it is in milliseconds
    setInterval(function () {
        //display the role and increment the counter to point to next role
        i = counter++;
        role.text(roles[i].tech);
        role.css('color', roles[i].color);
        //if it is the last role in the array point back to the first item
        if (counter >= roles.length) {
            counter = 0;
        }
    }, 1200);

    jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});

[{tech:'Wordpress',color:'#21759B'}, 
{tech:'Drupal',color:'#0678BE'}, 
{tech:'Laravel',color:'#F46762'},
{tech:'Angular', color:'#C3002F'}]