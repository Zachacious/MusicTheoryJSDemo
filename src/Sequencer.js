import * as MT from 'musictheoryjs';
import * as JZZ from 'jzz';
require('jzz-synth-tiny')(JZZ);

class Sequencer{
    mSeq;
    mKey;
    mScale;
    mChords;
    mMelody = [];
    mMelodyScale;
    mDegrees = [];
    constructor(pKey = MT.Note.C(), pScale = MT.Scale.Major(), pMelodyScale = MT.Scale.HarmonicMajor()){
        this.mKey = pKey;
        this.mScale = pScale;
        this.mMelodyScale = pMelodyScale;
    }

    get sequencer(){
        return this.mSeq;
    }

    get key() {
        return this.mKey;
    }

    get chords(){
        return this.mChords;
    }

    get scale() {
        return this.mScale;
    }

    get I() {return this.mScale.degree(1)}
    get II() {return this.mScale.degree(2)}
    get III() {return this.mScale.degree(3)}
    get IV() {return this.mScale.degree(4)}
    get V() {return this.mScale.degree(5)}
    get VI() {return this.mScale.degree(6)}
    get VII() {return this.mScale.degree(7)}

    setRythm(pChords, pDegrees){
        this.mChords = pChords;
        this.mDegrees = pDegrees;
    }

    setMelody(pNotes){
        this.mMelody = pNotes;
    }

    setScale(pScale){
        this.mScale = pScale;
    }

    // because MT.Note.asString will somestimes return something like 'F#/Gb' 
    // which is invalid for a chord name
    fixChordName(str) {
        let s = str.split('/')[1];
        return s || str;
    }

    prepare(pForm){
        this.mKey = new MT.Note(pForm.key, 2);
        
        switch(pForm.scale){
            case 'Major':
                this.mScale = MT.Scale.Major(this.mKey);
                break;
            case 'Minor':
                this.mScale = MT.Scale.Minor(this.mKey);
                break;
            case 'Pentatonic':
                this.mScale = MT.Scale.PentatonicMajor(this.mKey);
                break;
            case 'Enigmatic':
                this.mScale = MT.Scale.EnigmaticMajor(this.mKey);
                break;
            case 'Spanish':
                this.mScale = MT.Scale.Spanish(this.mKey);
                break;
            case 'HarmonicMajor':
                this.mScale = MT.Scale.HarmonicMajor(this.mKey);
                break;
            case 'MelodicMinor':
                this.mScale = MT.Scale.MelodicMinorAscend(this.mKey);
                break;
            default: break;
        }

        switch(pForm.mode){
            case 'Ionian':
                this.mScale = this.mScale.ionianMode();
                break;
            case 'Dorian':
                this.mScale = this.mScale.dorianMode();
                break;
            case 'Phrygian':
                this.mScale = this.mScale.phrygianMode();
                break;
            case 'Lydian':
                this.mScale = this.mScale.lydianMode();
                break;
            case 'Mixolydian':
                this.mScale = this.mScale.mixolydianMode();
                break;
            case 'Aeolian':
                this.mScale = this.mScale.Minor(this.mKey);
                break;
            case 'Locrian':
                this.mScale = this.mScale.locrianMode();
                break;
            default: break;
        }

        this.setRythm([
            new MT.Chord(this.fixChordName(this.mScale.degree(pForm.progression[0]).asString+pForm.chords[0])).octave(2),
            new MT.Chord(this.fixChordName(this.mScale.degree(pForm.progression[1]).asString+pForm.chords[1])).octave(2),
            new MT.Chord(this.fixChordName(this.mScale.degree(pForm.progression[2]).asString+pForm.chords[2])).octave(2),
            new MT.Chord(this.fixChordName(this.mScale.degree(pForm.progression[3]).asString+pForm.chords[3])).octave(2)
        ], pForm.progression);

    }

    playChord(pChord, pPort, pTime){
        let port = pPort;
        let time = pTime;
        if(pChord){
            pChord.notes.forEach((item)=>{
                port.wait(time).noteOn(0, item.midiKey, 80).wait(2000).noteOff(0, item.midiKey);
            });
        }
        return port
    }

    play(pTime = 0){
        if(!this.mSeq){
            this.mSeq = JZZ.synth.Tiny();
        }

        let port = this.mSeq;
        let time = pTime;

        if(this.mChords){
            this.mChords.forEach((item)=>{
                port = this.playChord(item, port, time);
                time += 2000;
            });
            
        }

        return time;
    }
}

export default Sequencer;