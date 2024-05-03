using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;


public class SimonManager : MonoBehaviour
{
    public List<int> sequence = new List<int>();
    private int si = 0;
    public TextMeshProUGUI scoreTxt;
    public TextMeshProUGUI highScoreTxt;
    private int score = 0;
    private int highscore = 0;
    public List<Image> buttonImages;
    public float ht = 0.5f;
    public AudioSource audioSource;
    public List<AudioClip> buttonSounds;
    void Start()
    {
        highscore = PlayerPrefs.GetInt("HighScore", 0);
        if (highScoreTxt != null)
        {
            highScoreTxt.text = "Highest: " + highscore.ToString();
        }
        else
        {
            Debug.LogError("highScoreTxt no está asignado.");
        }

        if (buttonImages.Count > 0)
        {
            StartCoroutine(StartGame());
        }
        else
        {
            Debug.LogError("buttonImages no contiene imágenes.");
        }
    }

    IEnumerator StartGame()
    {
        yield return new WaitForSeconds(1);
        AddNewColorToSequence();
        StartCoroutine(ShowSequence());
    }

    void AddNewColorToSequence()
    {
        sequence.Add(Random.Range(1, 5));
        Debug.Log("Nuevo color añadido: " + sequence[sequence.Count - 1]);
        UpdateScore();
    }

    IEnumerator ShowSequence()
    {
        Debug.Log("Inicio de ShowSequence con secuencia de tamaño: " + sequence.Count);
        foreach (int colorIndex in sequence)
        {
            int i = colorIndex - 1;
            if (i < 0 || i >= buttonImages.Count)
            {
                Debug.LogError("Índice de botón fuera de rango: " + i);
                continue;
            }
            Debug.Log("Mostrando botón con índice ajustado: " + i);
            yield return new WaitForSeconds(ht);
            StartCoroutine(HighlightButton(buttonImages[i], i));
        }
    }

    IEnumerator HighlightButton(Image buttonImage, int soundIndex)
    {
        Color originalColor = buttonImage.color;
        buttonImage.color = Color.white;

        if (soundIndex >= 0 && soundIndex < buttonSounds.Count)
        {
            audioSource.PlayOneShot(buttonSounds[soundIndex]);
        }
        else
        {
            Debug.LogError("Índice de sonido fuera de rango: " + soundIndex);
        }

        yield return new WaitForSeconds(ht);
        buttonImage.color = originalColor;
    }



    public void CInput(int buttonID)
    {

        int soundIndex = buttonID - 1;
        if (soundIndex >= 0 && soundIndex < buttonSounds.Count)
        {
            audioSource.PlayOneShot(buttonSounds[soundIndex]);
        }
        else
        {
            Debug.LogError("Índice de sonido fuera de rango: " + soundIndex);
        }
        if (buttonID == sequence[si])
        {
            si++;
            if (si >= sequence.Count)
            {
                si = 0;
                AddNewColorToSequence();
                StartCoroutine(ShowSequence());
            }
        }
        else
        {
            ResetGame();
        }
    }


    void UpdateScore()
    {
        score = sequence.Count - 1;
        scoreTxt.text = "Score: " + score.ToString();
        if (score > highscore)
        {
            highscore = score;
            highScoreTxt.text = "Highest: " + highscore.ToString();
            PlayerPrefs.SetInt("HighScore", highscore);
        }
    }

    void ResetGame()
    {
        sequence.Clear();
        si = 0;
        score = 0;
        StartCoroutine(StartGame());
    }
}
