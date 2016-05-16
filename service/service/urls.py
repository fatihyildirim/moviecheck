from django.conf import settings
from django.conf.urls import include, url
from django.contrib import admin
from rest_framework import routers, serializers, viewsets
from movie import views as mv


router = routers.DefaultRouter()
router.register(r'movies', mv.MovieViewSet)

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
