from django.urls import path

from api import views



urlpatterns = [
    path('room',views.RoomListiView.as_view(),name='List-Room'),
    path('create',views.CreateRoomView.as_view(),name='create-Room'),
    path('get-room',views.GetRoom.as_view(),name='get-room'),
    path('join-room/',views.JoinRoom.as_view(),name='join-room'),
    path('user-in-room/',views.UserInRoom.as_view(),name='user-in-room'),
]
