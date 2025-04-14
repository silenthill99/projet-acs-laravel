<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function sendMessage(Request $request) {
        $msg = Contact::create([
            "email" => $request->email,
            "pseudo" => $request->pseudo,
            "subject" => $request->subject,
            "message" => $request->message
        ]);
        return Inertia::render('welcome');
    }
}
