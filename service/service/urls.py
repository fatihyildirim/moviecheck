from django.conf import settings
from django.conf.urls import include, url
from django.contrib import admin
from rest_framework import routers, serializers, viewsets
from movie import views as mv
from rest_framework.authtoken import views


router = routers.DefaultRouter()
router.register(r'movies', mv.MovieViewSet),
router.register(r'directors', mv.DirectorViewSet)
router.register(r'writers', mv.WriterViewSet)

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api-token-auth/', views.obtain_auth_token),
]
