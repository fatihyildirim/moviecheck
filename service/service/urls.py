from django.conf.urls import include, url
from django.contrib import admin
from rest_framework import routers, serializers, viewsets


router = routers.DefaultRouter()


urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
