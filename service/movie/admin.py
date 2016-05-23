from django.contrib import admin
from movie.models import Movie, Director, Writer


class MovieAdmin(admin.ModelAdmin):
	list_display = ('name', 'year', 'runtime', 'director', 'writer', 'status')
	list_editable = ('status',)


class DirectorAdmin(admin.ModelAdmin):
	list_display = ('name', 'status')
	list_editable = ('status',)


class WriterAdmin(admin.ModelAdmin):
	list_display = ('name', 'status')
	list_editable = ('status',)

admin.site.register(Movie, MovieAdmin)
admin.site.register(Director, DirectorAdmin)
admin.site.register(Writer, WriterAdmin)
