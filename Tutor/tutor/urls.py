from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
# router.register(r'phrases', views.PhraseViewSet)



urlpatterns = [
    path('', views.home, name='home'),
    path('phrases/', views.phrases, name='phrases'),
    path('questions/', views.examples, name='examples'),
    path('examples/', views.questions, name='questions'),
]