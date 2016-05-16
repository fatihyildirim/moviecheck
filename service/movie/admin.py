from django.contrib import admin
from movie.models import Movie


class MovieAdmin(admin.ModelAdmin):
	list_display = ('name', 'year', 'runtime', 'director', 'status')
	list_editable = ('status',)

admin.site.register(Movie, MovieAdmin)
