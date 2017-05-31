module.exports = function (grunt) {


    grunt.initConfig({

        // Import package manifest
        pkg: grunt.file.readJSON("sumtabletotal.jquery.json"),

        // Banner definitions
        meta: {
            banner: "/*\n" +
            " *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
            " *  <%= pkg.description %>\n" +
            " *  <%= pkg.homepage %>\n" +
            " *\n" +
            " *  Made by <%= pkg.author.name %>\n" +
            " *  Under <%= pkg.licenses[0].type %> License\n" +
            " */\n"
        },

        // Concat definitions
        concat: {
            dist: {
                src: ["src/jquery.sumtabletotal.js"],
                dest: "dist/jquery.sumtabletotal.js"
            },
            options: {
                banner: "<%= meta.banner %>"
            }
        },

        // Lint definitions
        jshint: {
            files: ["src/jquery.sumtabletotal.js"],
            options: {
                jshintrc: ".jshintrc"
            }
        },

        // Minify definitions
        uglify: {
            my_target: {
                src: ["dist/jquery.sumtabletotal.js"],
                dest: "dist/jquery.sumtabletotal.min.js"
            },
            options: {
                banner: "<%= meta.banner %>"
            }
        },

    });

    require('load-grunt-tasks')(grunt);
    grunt.registerTask("default", ["jshint", "concat", "uglify"]);

};
