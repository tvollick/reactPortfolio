<?php 
add_action('wp_enqueue_scripts', 'child_theme_styles'); 
add_action('wp_enqueue_scripts', 'child_theme_scripts'); 
function child_theme_styles () {
	wp_enqueue_style('child-style', get_stylesheet_directory_uri().'/style.css'); 
}
function child_theme_scripts () {
	wp_enqueue_script('reactAppJS', get_stylesheet_directory_uri().'/main.js', array(), false, true); 
}

?> 