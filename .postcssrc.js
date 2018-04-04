const postcssConfig = {
  map: true,
  plugins: [
    /**
     * NOTE: Postcss plugins are executed the order they are declared here.
     **/
		require( 'postcss-import' )( {
			from: "postcss/wmui-style-guide.dev.css"
		} ),
		require( 'postcss-custom-properties' )( {
			preserve: false
		} ),
		require( 'autoprefixer' )( {
			browsers: [
				"Android >= 2.3",
				"Chrome >= 10",
				"Edge >= 12",
				"Firefox >= 3.6",
				"IE >= 8",
				"IE_mob 11",
				"iOS >= 5.1",
				"Opera >= 12.5",
				"Safari >= 5.1"
			]
    } )
  ]
};

if ( process.env.NODE_ENV === 'production' ) {
  postcssConfig.plugins.push( require( 'cssnano' )( { preset: 'default' } ) )
}

module.exports = postcssConfig;
