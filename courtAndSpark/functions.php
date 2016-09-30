<?php 
add_action('wp_enqueue_scripts', 'child_theme_styles'); 
add_action('wp_enqueue_scripts', 'child_theme_scripts'); 
function child_theme_styles () {
	wp_enqueue_style('child-style', get_stylesheet_directory_uri().'/style.css'); 
	wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css?family=Kameron|Open+Sans:400,700'); 
}
function child_theme_scripts () {
	wp_enqueue_script('reactAppJS', get_stylesheet_directory_uri().'/main.js', array(), false, true); 
	wp_enqueue_script('tweenMax', 'http://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js', array('jquery'), false, true); 
	//wp_enqueue_script('baseHoldItJS', 'http://basehold.it/24', array(), false, true); 
}

// register custom post type 

add_action('init', 'custom_post_types'); 

function custom_post_types () { 
	$labels =  array(
			'name' => __('Portfolio', 'portfolio'), 
			'singular_name'=>__('Portfolio Project', 'portfolio'), 
	 		'menu_name'          => _x( 'Portfolio', 'admin menu', 'your-plugin-textdomain' ),
  		'name_admin_bar'     => _x( 'Portfolio', 'add new on admin bar', 'your-plugin-textdomain' ),
  		'add_new'            => _x( 'Add New', 'portfolio', 'your-plugin-textdomain' ),
  		'add_new_item'       => __( 'Add New Portfolio Project', 'your-plugin-textdomain' ),
  		'new_item'           => __( 'New Portfolio Project', 'your-plugin-textdomain' ),
  		'edit_item'          => __( 'Edit Portfolio Project', 'your-plugin-textdomain' ),
  		'view_item'          => __( 'View Portfolio Project', 'your-plugin-textdomain' ),
  		'all_items'          => __( 'All Portfolio Projects', 'your-plugin-textdomain' ),
  		'search_items'       => __( 'Search Portfolio Projects', 'your-plugin-textdomain' ),
  		'parent_item_colon'  => __( 'Parent Portfolio Projects:', 'your-plugin-textdomain' ),
  		'not_found'          => __( 'No Portfolio Projects found.', 'your-plugin-textdomain' ),
  		'not_found_in_trash' => __( 'No Portfolio Projects found in Trash.', 'your-plugin-textdomain' )
	);  

	$args = array(
		'labels'             => $labels,
		'description'        => __( 'Custom Post type for Porfolio Projects.', 'your-plugin-textdomain' ),
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'portfolio' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => null,
		'show_in_rest'       => true,
		'rest_base'          => 'portfolio-api',
		'rest_controller_class' => 'WP_REST_Posts_Controller',
		'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' )
	);	

	register_post_type('portfolio', $args); 
}


?>